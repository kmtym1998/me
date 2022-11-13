//go:build wasm

package main

import (
	"fmt"
	"syscall/js"

	"github.com/mmcdole/gofeed"
)

// func test(jsv js.Value) {
// 	js.Global().Get("console").Call("log", jsv.String())
// }

func main() {
	parser := gofeed.NewParser()

	feed, err := parser.ParseURL("https://zenn.dev/kmtym1998/feed")
	if err != nil {
		panic(err)
	}

	fmt.Println("feed.Title", feed.Title)
	fmt.Println("feed.FeedType", feed.FeedType)
	fmt.Println("feed.Items", feed.Items)
	for _, item := range feed.Items {
		fmt.Println("item.Link", item.Link)
	}

	// グローバルオブジェクト(window)を取得します
	window := js.Global()

	// document オブジェクトを取得します
	document := window.Get("document")

	// bodyを取得します
	body := document.Get("body")

	// h1 のDOMを作成します
	h1 := document.Call("createElement", "h1")
	h1.Set("innerHTML", "Hello Webassembly!")

	// h1をbodyに追加します
	body.Call("appendChild", h1)

	// プログラムが終了しないように待機します
	select {}
}
