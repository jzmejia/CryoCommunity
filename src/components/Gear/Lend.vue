<template>
    <v-list subheader class="py-0">
        <v-list-item :ripple="false" link v-for="i in 15" :key="i">
            <v-list-item-content>
                <v-list-item-title class="font-italic">lend {{ i }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
export default {

}
</script>

<style></style>