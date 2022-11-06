import { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import go from 'highlight.js/lib/languages/go';
import 'highlight.js/styles/atom-one-dark.css';

export const Profile = () => {
  hljs.registerLanguage('go', go);
  useEffect(() => {
    hljs.highlightAll();
  });
  const code = `package profile

import "fmt"

func Greet() {
	me := map[string]interface{}{
		"familyName": "小松山",
		"givenName":  "凌平",
		"job":        "ソフトウェアエンジニア",
		"birthday":   "1998/09/09",
		"likes":      []string{"Go", "Spotify", "鈴カステラ"},
		"dislikes":   []string{"生もの", "熱いもの", "早起き"},
	}
	fmt.Printf("こんにちは%s%sです", me["familyName"], me["givenName"])
}`;

  return (
    <pre>
      <code
        style={{
          borderRadius: 10,
          backgroundColor: '#05091e',
          padding: '2rem',
        }}
      >
        {code}
      </code>
    </pre>
  );
};
