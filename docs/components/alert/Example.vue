<template>
  <div class="component space-y-16">
    <div>
      <h3 class="h4">Info</h3>
      <w-alert show variant="info" role="status">
        <p>I am an excellent message for the user.</p>
      </w-alert>
    </div>
   <div>
      <h3 class="h4">Positive</h3>
      <w-alert show variant="positive" role="status">
        <p>This is the positive variant of the alert element</p>
      </w-alert>
    </div>
    <div>
      <h3 class="h4">Negative</h3>
      <w-alert show variant="negative" >
        <p>This is the negative variant of the alert element</p>
      </w-alert>
    </div>
    <div>
      <h3 class="h4">Warning</h3>
      <w-alert show variant="warning">
        <p>This is the warning variant of the alert element</p>
      </w-alert>
    </div>
  </div>
</template>