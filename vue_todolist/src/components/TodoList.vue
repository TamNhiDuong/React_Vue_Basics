<template>
<!--v-model save directly to data called "description".-->
<div>
<input type="text" placeholder="New todo" v-model="description" />
<button v-on:click="add">Add</button><br/>

<table>
    <tbody>
        <tr v-for="(todo, index) in todos" 
        v-bind:key="index"><td>{{todo}}</td></tr>
    </tbody>
</table>
</div>
    
</template>

<script>
export default {
    name: 'TodoList',
    data() {
        return {
        todos: [],
        description: ''
        }
    },
    methods: {
        add: function() {
            this.todos.push(this.description);
            this.description = ''
        }
    } 
}
</script>

<style scoped>
/* CSS */
table {
    margin: auto;
}

</style> 