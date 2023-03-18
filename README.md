# public-todo-management-repo
自分のPublicなTODOをまとめ、進捗させるためのプロジェクト


## 運用方針(2023/3/18時点)
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
### 4. タスク完了時
- `Issue`をCloseすること
- PRマージ後に、マージ元ブランチをDeleteすること

---
[Issue化していないもの込みのTODO一覧](https://github.com/users/n-ao/projects/15/)
