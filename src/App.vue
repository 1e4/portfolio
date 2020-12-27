<template>
    <div>
        <div class="container mt-3">
            <div class="row">
                <div class="col">
                    <h1>Ian Milliken</h1>

                    <p>I am a software engineer with ~10 years experience, I focus primarily on the backend with Laravel
                        but have a
                        lot of experience building applications in VueJS</p>

                    <p>Below you can find a list of projects I've worked on</p>
                </div>
            </div>
            <div v-for="(project, index) in projects" :key="index" class="row my-5 border bg-gray py-3">
                <div class="col-12 col-md-3 d-flex align-items-center">
                    <img :src="project.logo" class="project-logo" :alt="project.name + ' logo'"/>
                </div>
                <div class="col-12 col-md-9">
                    <div class="">
                        <h2>{{ project.name }}</h2>
                        <p>{{ project.description }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
module.exports = {
    data() {
        return {
            projects: [
                {
                    name: 'Blockception',
                    description: 'This contract project is working on their new website for 2021',
                    logo: require('./assets/blockception_logo.png'),
                },
                {
                    name: 'Galaxite',
                    description: 'Contract work for building our there Minecraft Administration panel to help provide ' +
                        'a solution to moderation integration with Auth0, Vuetify and VueJS',
                    logo: require('./assets/galaxite_logo.png')
                },
                {
                    name: 'EsportsCalendar',
                    description: 'Contract work for building a new up to date EsportsCalendar and hub integrating Auth0 and Abios with a Vue and Bootstrap frontend',
                    logo: require('./assets/esportscalendar_logo.png')
                },
                {
                    name: 'IdleScape',
                    description: 'Software Engineer for Idlescape working with Node & React',
                    logo: require('./assets/idlescape_logo.png'),
                },
                {
                    name: 'CrimeBloc',
                    description: 'Owner and developer developing a text based mafia game',
                    logo: require('./assets/crimebloc_logo.png'),
                }
            ]
        }
    }
}
</script>
