<template>
    <nav class="flex justify-evenly items-center">
        <NuxtLink to="/about" class="mx-4">About</NuxtLink>
        <nav-bar-item-dropdown title="Conference" class="mx-4">
            <NuxtLink to="/conference/schedule">Schedule</NuxtLink>
            <NuxtLink to="/conference/keynotes">Keynotes</NuxtLink>
            <NuxtLink to="/conference/talks">Talks</NuxtLink>
            <NuxtLink to="/conference/tutorials">Tutorials</NuxtLink>
            <NuxtLink to="/conference/community-tracks">
                Community Tracks
            </NuxtLink>
        </nav-bar-item-dropdown>
        <nav-bar-item-dropdown title="Events" class="mx-4">
            <NuxtLink to="/events/overview">Overview</NuxtLink>
            <NuxtLink to="/events/warm-up-sessions">Warm-Up Sessions</NuxtLink>
            <NuxtLink to="/events/open-spaces">Open Spaces</NuxtLink>
            <NuxtLink to="/events/sprints">Sprints</NuxtLink>
            <NuxtLink to="/events/job-listings">Job Listings</NuxtLink>
        </nav-bar-item-dropdown>
        <nav-bar-item-dropdown title="Registration" class="mx-4">
            <NuxtLink to="/registration/tickets">Conference Tickets</NuxtLink>
            <NuxtLink to="/registration/financial-aid">Financial Aid</NuxtLink>
        </nav-bar-item-dropdown>
        <NuxtLink to="/venue" class="mx-4">Venue</NuxtLink>
        <NuxtLink to="/covid-19/guidelines" class="mx-4"
            >COVID-19 Guidelines</NuxtLink
        >
    </nav>
</template>

<script>
import NavBarItemDropdown from './NavBarItemDropdown'

export default {
    name: 'CoreHeaderNavBar',
    components: {
        NavBarItemDropdown,
    },
}
</script>

<style scoped></style>
