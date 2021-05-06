import { Component, ElementRef, EventEmitter,
  Inject,
  NgZone, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PositionModel } from '../entity/position.model';

@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  @Output()
  positionChanged: EventEmitter<PositionModel> = new EventEmitter<PositionModel>();

  // @ViewChild('search', { static: true }) searchElementRef: ElementRef;
  @ViewChild('search')
  public searchElementRef: ElementRef;

  public shippingAddress: string;

  constructor(private ngZone: NgZone,@Inject(DOCUMENT) private document: Document, private renderer2: Renderer2) { }

  ngOnInit() {


    this.loadAutoComplete();

    // const autocomplete = new google.maps.places.Autocomplete(
    //   this.searchElementRef.nativeElement, { types: ['address'] },
    // );
    // const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
    // let autocomplete = new window['google']['maps']['places']['Autocomplete'](this.searchElementRef.nativeElement, {
    //   types: ["address"]
    // });
    // autocomplete.addListener('place_changed', () => {
    //   this.ngZone.run(() => {
    //     // get the place result
    //     const place: google.maps.places.PlaceResult = autocomplete.getPlace();

    //     // verify result
    //     if (place.geometry === undefined || place.geometry === null) {
    //       return;
    //     }

    //     this.positionChanged.emit(new PositionModel(
    //       place.geometry.location.lat(),
    //       place.geometry.location.lng(),
    //     ));
    //   });
    // });
  }

  private loadAutoComplete() {
    const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC3AzrmrAHBe5zecIfwGh3EQ7lM9LfNzno&libraries=places&v=weekly';
    this.loadScript(url).then(() => this.initAutocomplete());
  }

  private loadScript(url) {
    return new Promise((resolve, reject) => {
      const script = this.renderer2.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.text = ``;
      script.async = true;
      script.defer = true;
      script.onload = resolve;
      script.onerror = reject;
      this.renderer2.appendChild(this.document.head, script);
    })
  }

  initAutocomplete() {
    const input = document.getElementById("txtSearchPlaces") as HTMLInputElement;
    const autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.setFields([
      "address_components",
      "geometry",
      "icon",
      "name"
    ]);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      console.log(place);
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        alert('No details available for input:' + input.value);
        return;
      } else {

        let position = new PositionModel();
        position.lat = place.geometry.location.lat();
        position.lng = place.geometry.location.lng();

        this.positionChanged.emit(position);
        return;
      }
    });
  }
}
