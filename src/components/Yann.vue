<template>
<div class="container">
    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQF3UpzRwVUGzw/profile-displayphoto-shrink_800_800/0/1584433248100?e=1637798400&v=beta&t=qSyk0qD4U8pMy000D5tSqbhvtfdIPQLu7hlJzrSPLB0" alt="Profile picture">
    <h1>Yann Decelle</h1>
    <p>Étudiant à l'IIM en recherche d'alternance</p>
    <h2>Technologies préférée</h2>
    <ul>
        <li>HTML/CSS</li>
        <li>VueJS</li>
        <li>SASS</li>
        <li>Laravel</li>
    </ul>
</div>
</template>

<script>
    export default {
        name: 'Yann'
    }
</script>

<style scoped>
.container
{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
img
{
    width: 20%;
}
</style>