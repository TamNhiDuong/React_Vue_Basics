<template>
<!--v-model save directly to data called "description".-->
<div>
<input type="text" placeholder="New todo" v-model="description" />
<input type="date" placeholder="Date" v-model="date" />
<button v-on:click="add">Add</button><br/>

<table>
    <tbody>
        <tr v-for="(todo, index) in todos" v-bind:key="index">
        <td>{{todo.description}} {{todo.date}}</td></tr>
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
        description: '',
        date: ''
        }
    },
    methods: {
        add: function() {
            this.todos.push({description: this.description, date: this.date});
            this.description= '';
            this.date= ''
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