# Photos Portfolio for bichbui.com

- Headless UI
- Heroicons
- Tailwindcss
- Fully customized light and dark themes
- Internationalization: German, English, Vietnamese
- Prisma + Planetscale
- C2 Object Storage
- Namecheap domain
-

## Docs

```mermaid
erDiagram
    USER ||--o{ COMMENT : creates
    USER {
        string id
        string displayName
        string photoURL
        string username
    }
    COMMENT {
        string id
        string deliveryAddress
    }
```

## Dev notes

- i18n is a mess with Nuxt - too much config required, does not work out of the box
- unplugin-auto-import does too much magic but still requires configurations, e.g subfolders scanning
- Really good dev tools, embded on webpage
- Volar displays type of response, pretty sick
- Integration of component-pinia-nuxt server api did not work at first (volar shows type correctly, but response is null)
  - Seems to be timing issue, page refresh = null response, but loaded the app and navigating to page = correct response
  - Node issue? https://stackoverflow.com/questions/74759799/nuxt-3-ssr-usefetch-returning-null-on-page-refresh
  - Instead of component -> action -> pinia -> nuxt server api with useFetch you need to
    component -> useAsyncData(action) -> pinia -> nuxt server api (??)
    ) - should probably read the docs before doing stuff
