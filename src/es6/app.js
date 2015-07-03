import React from 'react';
import { IntlMixin, FormattedMessage } from 'react-intl';

const App = React.createClass({
  mixins: [IntlMixin],

  render () {
    return (
      <div>
        <FormattedMessage
          message={this.getIntlMessage(`${this.props.locales}.photos`)}
          name="Annie"
          numPhotos={1000}
          takenDate={Date.now()} />
      </div>
    );
  }
});

const intlData = {
  "locales": window.navigator.language,
  "messages": {
    "es-AR": {
      "photos": "El {takenDate, date, long}, {name} {numPhotos, plural,\n  =0 {no}\n  other {}\n} sacó {numPhotos, plural,\n  =0 {ninguna foto.}\n  =1 {una foto.}\n  other {# fotos.}\n}\n"
    },
    "en-US": {
      "photos": "{name} took {numPhotos, plural,\n  =0 {no photos}\n  =1 {one photo}\n  other {# photos}\n} on {takenDate, date, long}.\n"
    }
  }
};

React.render(<App { ...intlData } />,
             document.getElementById('app'));
