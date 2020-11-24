<template>
<div>
    <div v-if="!this.showGame">
        <button @click="showDialog">联机游戏</button>
        <div v-if="dialog==true">
            <input v-model="nickName" placeholder="请输入个人昵称">
            <br>
            <input v-model="roomId" placeholder="请输入房间名">
            <br>
            <button :class="{'clickable': clickable}" @click="enterRoom">确定</button>
            <button @click="() => dialog = false">关闭</button>
        </div>
        <br>
        <br>
        <button @click="startGame">单人游戏</button>
    </div>
    <Game v-if="this.showGame"> 
        
    </Game>
</div>
</template>

<script>

import Game from '../components/Game'

export default {
    data() {
        return{
            nickName:'',
            roomId: '',
            dialog: false,
            showGame: false
        }
    },

    components: {
        Game
    },
    
    methods: {
        
        enterRoom() {
            if(!this.nickName || !this.roomId){
                alert("请补充完整信息！")
                return
            }
            
            localStorage.nickName = this.nickName
            localStorage.roomId = this.roomId
            this.$store.commit('setNickname', this.nickName)
            this.$store.commit('setRoomid', this.roomId)

            this.$router.push({
                path: "/room"
            })
        },

        showDialog() {
            this.dialog = true
        },

        startGame() {
            this.showGame = true
            this.$store.state.single = true
        }
        
    },
 
    computed: {
        clickable() {
            return this.nickName!=undefined && this.roomId!=undefined && this.nickName.length>0 && this.roomId.length > 0
        }
    }

}
</script>