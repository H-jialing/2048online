<template>
<div>
    我的分数：{{myScore}} VS 对手的分数：{{mateScore}}
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
            mateScore: 0
        }
    },

    mounted() {
        this.myScore = this.$route.params.myScore
        this.mateScore = this.$route.params.mateScore
    },

    methods: {
        returnRoom() {
            this.$router.push("/")
        }
    }
}
</script>