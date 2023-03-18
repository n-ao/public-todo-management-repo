# public-todo-management-repo
自分のPublicなTODOをまとめ、進捗させるためのプロジェクト

## 活用方針
リンクしている全`Repository`横断の`Projects`のみだと、視覚化はできても前に進めにくい。

`IDD`するタイミングで`Repository`を作るやり方で進めてみたが、1タスク1リポはフットワークが重い気がした。

理由として、開発を伴わなくても成立する`Issue`がそこそこあり、今のやり方では進めにくいと判断。ワンクッション入れようと考えた。

- 開発を伴うものについてはこれまで通り`RDD`（Repository-driven development）で問題ない。
- 開発を伴わないものを進めるために、この`Repository`を活用しようと思う。

## 運用手順(2023/3/18時点)
`IDD`(Issue-driven development)で進める。

### 1. 初動
- スマホ込みでとにかく記録する
- 一旦メモ([#7](https://github.com/n-ao/public-todo-management-repo/issues/7))にためるか直接`Issue`化
### 2. 管理
- `Projects`で管理する場合は`Issue`単位で紐づける

```
Projectsから登録した場合、双方に関連づけられるが、このRepositoryから登録したIssueは、都度ProjectsにLinkする必要がある。
（リンク対象のProjectsはRepository横断で使っており、それで問題ない）
```

### 3. 開発
- [必須]`Issue`ベースでブランチを切り進めていく
- [推奨]別リポジトリを作成し、続きはそちらで行う
- PRマージ後も、`Issue`のゴール次第でブランチを継続

```
開発に関しては2系統に分かれる。
・このRepository完結
・このRepositoryから派生して別で進行
```

### 4. タスク完了時
- `Issue`をCloseすること
- PRマージ後に、マージ元ブランチをDeleteすること

---
[Issue化していないもの込みのTODO一覧](https://github.com/users/n-ao/projects/15/)
