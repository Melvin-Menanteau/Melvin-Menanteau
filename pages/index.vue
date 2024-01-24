<script setup>
/* -------------------------------------------------------------------------
--------------------------------- STORES -----------------------------------
------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------
------------------------------- VARIABLES ----------------------------------
------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------
------------------------------- FONCTIONS ----------------------------------
------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------
------------------------------- WATCHERS -----------------------------------
------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------
---------------------------- LIFECYCLE HOOKS -------------------------------
------------------------------------------------------------------------- */
</script>

<template>
    <div class="w-screen h-screen flex justify-center items-center bg-goldenrod">
        <div class="flex flex-col items-center gap-4">
            <div class="w-fit flex flex-col items-center font-sans font-black text-9xl text-white drop-shadow-md uppercase">
                <p>Menanteau</p>
                <p>Melvin</p>
            </div>
            <div class="w-1/6 flex flex-row justify-between">
                <UButton to="https://www.linkedin.com/in/melvin-menanteau/" target="_blank" color="black" variant="link" class="hover:drop-shadow-lg" icon="i-mdi-linkedin" size="xl"/>
                <UButton to="https://www.github.com/Melvin-Menanteau" target="_blank" color="black" variant="link" class="hover:drop-shadow-lg" icon="i-mdi-github" size="xl"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
</style>