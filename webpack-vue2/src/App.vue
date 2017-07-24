<!-- 简单写个title和一个循环 -->
<template>
    <div id="example">
        <h1>{{ msg }}</h1>
        <ul>
            <li v-for="n in 5">{{ n }}</li>
        </ul>
		姓名：{{name}}
		<input type="text" v-model="name" />
		<button v-on:click="show()">点击</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Hello World!',
			name:'phc'
        }
    },
	methods:{
		show()
		{
		   alert('123');
		}
	}
}
</script>

<style scoped>
#example {
    background: red;
    height: 100vh;
}
</style>