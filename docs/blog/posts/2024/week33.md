---
title: '@warp-ds v2 - Stable releases'
date: 2024-08-15
---

Stable releases with DBA changes for web are now available.

---

# How to Update Your Web Apps for DBA

### Packages to Install from NPM

| Package Name        | Version        |
|---------------------|----------------|
| `@warp-ds/css`      | `2.0.0`        |
| `@warp-ds/uno`      | `2.0.0`        |
| `@warp-ds/react`    | `2.0.0`        |
| `@warp-ds/vue`      | `2.1.1`        |
| `@warp-ds/elements` | `2.0.0`        |
| `@warp-ds/icons`    | `2.1.0`        |

If you have already followed the [previous instructions for the DBA beta changes](https://warp-ds.github.io/tech-docs/blog/posts/2024/warp-2-0) and have disabled EIK import mapping for `react`, `vue` & `elements`, you can now re-enable it.

For further instructions on how to migrate from v1 to v2, please follow [these instructions](https://warp-ds.github.io/tech-docs/blog/posts/2024/warp-2-0#migrating-from-v1-to-v2).

## Breaking changes
### @warp-ds/react 2.0.0
[Changelog for @warp-ds/react 2.0.0](https://github.com/warp-ds/react/releases/tag/v2.0.0)

[Changelog for @warp-ds/react 2.0.1-next.1](https://github.com/warp-ds/react/releases/tag/v2.0.1-next.1)


The following properties have been removed:

| Component  | Property               | Note                              |
|------------|------------------------|-----------------------------------|
| Badge      | variant `notification` | Removed                           |
| Box        | clickable              | Removed                           |
| Card       | onClick                | Removed                           |
| Expandable | info                   | Removed                           |


### @warp-ds/vue 2.1.1
[Changelog for @warp-ds/vue 2.1.0](https://github.com/warp-ds/vue/releases/tag/v2.1.0)

[Changelog for @warp-ds/vue 2.1.1](https://github.com/warp-ds/vue/releases/tag/v2.1.1)


The following properties/components have been removed:

| Component  | Property               | Note                              |
|------------|------------------------|-----------------------------------|
| Badge      | variant `notification` | Removed                           |
| Box        | clickable              | Removed                           |
| Expandable | info                   | Removed                           |
| Suffix     |                        | Entire component has been removed |
| Tag        |                        | Entire component has been removed |

### @warp-ds/elements 2.0.0
[Changelog for @warp-ds/elements 2.0.0](https://github.com/warp-ds/elements/releases/tag/v2.0.0)

[Changelog for @warp-ds/elements 2.0.1-next.2](https://github.com/warp-ds/elements/releases/tag/v2.0.1-next.2)


The following properties have been removed:

| Component  | Property               | Note                              |
|------------|------------------------|-----------------------------------|
| Badge      | variant `notification` | Removed                           |
| Expandable | info                   | Removed                           |

### @warp-ds/css 2.0.0
[Changelog](https://github.com/warp-ds/css/releases/tag/v2.0.0)

The following exported objects/classes have been removed:

| Exported object            | Class name(s)                                                            | Note                                                          |
|----------------------------|--------------------------------------------------------------------------|---------------------------------------------------------------|
| backwardsCompatibleClasses |                                                                          | Entire exported object has been removed                       |
| badge                      | `borderedClickable`, `infoClickable`, `neutralClickable`, `notification` | Removed                                                       |
| card                       | `cardUnselected`                                                         | Removed                                                       |
| expandable                 | `chevronBox`, `expandableInfo`                                           | Removed                                                       |
| helpText                   | `helpTextValid`, `helpTextInvalid`                                       | Removed                                                       |
| label                      | `labelInvalid`                                                           | Removed                                                       |
| modal                      | `transparentBg`                                                          | Removed                                                       |
| ribbon                     |                                                                          | Entire exported object has been removed and replaced by badge |
| switchToggle               | `switch`                                                                 | Removed                                                       |



