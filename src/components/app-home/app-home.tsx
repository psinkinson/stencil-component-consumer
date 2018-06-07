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
        <div>
          <div class="component-container">
            <ps-web-component first="First" last="Component"></ps-web-component>
          </div>
          <div class="component-container">
            <ps-web-component first="Second" last="Component"></ps-web-component>
          </div>
          <div class="component-container">
            <ps-web-component first="Third" last="Component"></ps-web-component>
          </div>
          <div class="component-container">
            <ps-web-component first="Forth" last="Component"></ps-web-component>
          </div>
        </div>
        <h4>^^^ Consumed web component should be above ^^^</h4>
      </div>
    );
  }
}
