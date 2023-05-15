## Technical details
You can set the active tab in one of two ways:

1. By passing the name of the active Tab to the Tabs component using the active attribute.
2. By setting isActive on the active Tab.
The first Tab is active by default if you don't specify an active Tab.

It is important that all children of Tabs are Tab components.

Note that name attributes will be used to generate id attributes (prefixed with fabric-tab- and fabric-tabpanel-), and therefore they must be unique throughout the entire DOM. This is because aria-controls and aria-labelledby rely on id attributes, and they are required for the tabs to be ARIA compliant.

## Accessibility

Focus management and ARIA attributes are handled automatically.
