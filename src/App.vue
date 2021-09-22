<template>
    <nav class="card p-3">
        <ul class="nav nav-tabs nav-justified nav-bordered mb-3">
            <li class="nav-item">
                <a href="javascript:void(0)" data-bs-toggle="tab" aria-expanded="false" class="nav-link" @click="changeActive('nicolas')" :class="{active: isActive('nicolas')}">
                    <span class="d-none d-md-block">Nicolas</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="javascript:void(0)" data-bs-toggle="tab" aria-expanded="false" class="nav-link" @click="changeActive('yann')" :class="{active: isActive('yann')}">
                    <span class="d-none d-md-block">Yann</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="javascript:void(0)" data-bs-toggle="tab" aria-expanded="false" class="nav-link" @click="changeActive('ahmed')" :class="{active: isActive('ahmed')}">
                    <span class="d-none d-md-block">Ahmed</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="javascript:void(0)" data-bs-toggle="tab" aria-expanded="false" class="nav-link" @click="changeActive('sacha')" :class="{active: isActive('sacha')}">
                    <span class="d-none d-md-block">Sacha</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="javascript:void(0)" data-bs-toggle="tab" aria-expanded="false" class="nav-link" @click="changeActive('florent')" :class="{active: isActive('florent')}">
                    <span class="d-none d-md-block">Florent</span>
                </a>
            </li>
            
        </ul>
    </nav>
    <div class="tab-content">
        <Nicolas v-if="activePage == 'nicolas'" />
        <Yann v-else-if="activePage == 'yann'" />
        <Ahmed v-else-if="activePage == 'ahmed'" />
        <Sacha v-else-if="activePage == 'sacha'" />
        <Florent v-else-if="activePage == 'florent'" />
    </div>
</template>

<script>
    import Nicolas from './components/Nicolas.vue'
    import Yann from './components/Yann.vue'
    import Sacha from './components/Sacha.vue'
    import Ahmed from './components/Ahmed.vue'
    import Florent from './components/Florent.vue'
    export default {
        name: 'App',
        components: {
            Nicolas,
            Yann,
            Sacha,
            Ahmed,
            Florent
        }, 
        data() {
            return {
                activePage: 'nicolas'
            }
        },
        methods: {
            changeActive(tab) {
                return this.activePage = tab
            },
            isActive(tab) {
                return this.activePage == tab
            }
        }
    }
</script>