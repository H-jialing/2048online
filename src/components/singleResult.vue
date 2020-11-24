<template>
<div>
    我的分数：{{myScore}} 
    <div>
        <button @click="returnRoom">下一局游戏</button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            myScore: 0,
        }
    },

    mounted() {
        this.myScore = this.$route.params.myScore
    },

    methods: {
        returnRoom() {
            this.$router.push("/")
        }
    }
}
</script>