import { Component } from '@stencil/core';
import 'ps-web-component';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to my Stencil Web component Consumer App.
          Below is a stencil generated web component which has been imported from npm
        </p>
        <h4>vvv Consumed web component should be below vvv</h4>
        <p>
          <ps-web-component first="A Web" last="Component"></ps-web-component>
        </p>
        <h4>^^^ Consumed web component should be above ^^^</h4>
      </div>
    );
  }
}
