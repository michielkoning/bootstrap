<?php get_header(); ?>

<div id="app"></div>

<app-message text="asdsad"></app-message>

<div id="modal-block">
<app-modal title="header" visible="false" @close="close()" onclose="close()" Close="close()" CustomEvent="close()">adasd</app-modal>
</div>

<button id="button">
show modal
</button>


<?php get_footer(); ?>
