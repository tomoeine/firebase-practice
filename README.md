## このリポジトリについて

Firebase Hosting と Cloud Functions を利用したアプリケーション開発を練習するためのリポジトリです。

## 準備

```shell
$ npm install -g firebase-tools
```

## 開発を始める

このリポジトリをクローンした後に、以下のコマンドで依存関係をインストールします。

```shell
cd ./nuxt
yarn install

cd ../functions
npm install
```

## エミュレーターで動作確認する

Nuxt アプリケーションをビルドします。

```shell
$ cd ./nuxt
$ yarn build
```

エミュレーターを起動します。

```shell
$ firebase emulators:start
```

動作確認URL: `http://localhost:5000` 
Emulator Suite: `http://localhost:4001`

### 変更を反映する

Nuxt アプリケーションの更新時は nuxt ディレクトリで `yarn build` を実行すると反映されます。（エミュレーターの再起動は不要）