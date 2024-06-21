<script setup>
    import { inject } from 'vue';


    const storeDataDetail = inject('storeDataDetail');

    const emit = defineEmits(['checkNotification']);
    const props = defineProps({
        storeId: {
            type: String,
            required: true,
        }
    });

    const storeData = storeDataDetail[props.storeId];
</script>

<template>
    <div class="callNotificationBg">
        <div class="callNotification__inner">
            <div class="callNotificationInnerTitle">
                <h2>お呼び出し</h2>
            </div>
            <div class="callNotificationInnerContent">
                <p>{{ storeData.name }}の呼び出しがありました。</p>
                <p>お早めにお越しください。</p>
                <p>場所:{{ storeData.place }}</p>
            </div>
            <div class="callNotificationInnerButton">
                <button @click="emit('checkNotification')">閉じる</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .callNotificationBg {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>