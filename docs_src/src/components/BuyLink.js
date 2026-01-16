import React, { useEffect, useState } from 'react';

export default function BuyLink() {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    fetch('https://api.winui.net/simple/v5/buy_url')
      .then(res => res.text())
      .then(text => setUrl(text));
  }, []);

  return (
    <a href={url || '#'} id="buy">
      {url || 'loading...'}
    </a>
  );
}
