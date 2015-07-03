import React from 'react';
import { IntlMixin, FormattedMessage } from 'react-intl';

const App = React.createClass({
  mixins: [IntlMixin],

  render () {
    return (
      <div>
        <FormattedMessage
          message={this.getIntlMessage('photos')}
          name="Annie"
          numPhotos={1000}
          takenDate={Date.now()} />
      </div>
    );
  }
});

const messages = {
  "es-AR": {
    "photos": "El {takenDate, date, long}, {name} {numPhotos, plural,\n  =0 {no}\n  other {}\n} sacó {numPhotos, plural,\n  =0 {ninguna foto.}\n  =1 {una foto.}\n  other {# fotos.}\n}\n"
  },
  "en-US": {
    "photos": "{name} took {numPhotos, plural,\n  =0 {no photos}\n  =1 {one photo}\n  other {# photos}\n} on {takenDate, date, long}.\n"
  }
};

React.render(<App locales={ window.navigator.language }
                  messages={ messages[window.navigator.language] } />,
             document.getElementById('app'));
