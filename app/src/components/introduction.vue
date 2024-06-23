<script setup>
    import { ref, computed, onUnmounted } from 'vue';
    import { useRouter } from 'vue-router';
    import StoreDiscriptionBox from './StoreDiscriptionBox.vue';
    import { getStoreDatas } from '../global/dbFunctions.js';

    const StoreDatas = ref({});
    async () => {StoreDatas.value = ref(await getStoreDatas());}

    const router = useRouter();

    const polling = setInterval(async () => {
        if(router.currentRoute.path !== '/introduction') return
        if (document.visibilityState === 'visible') {
            StoreDatas.value = await getStoreDatas();
        }
    }, 60000);

    const StoreIDs = ref(Object.keys(StoreDatas.value));

    const CategoryChecked = ref([]);

    const CategoryAll = computed(() => {
        var result = 0;
        for (var i of CategoryChecked.value) {
            result = (result | Number(i));
        }
        return result;
    });

    const GradeChecked = ref([]);
    const GradeAll = computed(() => {
        var result = 0;
        for (var i of GradeChecked.value) {
            result = (result | Number(i));
        }
        return result;
    });


    const Categorys = {
        '食販': 1,
        '飲食店': 2,
        '物販': 4,
        '体験型': 8,
        '展示': 16,
        'イベント': 32,
        'その他': 64
   };

    const Grades = {
        '1年生': 1,
        '2年生': 2,
        '3年生': 4,
        '部活': 8,
        'その他': 16
    };

    const DisplayStoreList = computed(() => {
        var result = [];
        for (var i in StoreIDs.value) {
            if (CategoryAll.value == 0 && (Grades[StoreDatas.value[i].grade] & GradeAll.value) != 0 || (Categorys[StoreDatas.value[i].category] & CategoryAll.value) != 0 && GradeAll.value == 0 || (Categorys[StoreDatas.value[i].category] & CategoryAll.value) != 0 && (Grades[StoreDatas.value[i].grade] & GradeAll.value) != 0 || (CategoryAll.value + GradeAll.value) == 0) {
                result.push(StoreDatas.value[i].id);
            }
        }
        return result;
    });

    const AccordionOpen = ref(false);

    onUnmounted(() => {
        clearInterval(polling);
    });
</script>

<template>
    <div>
        <h1>出し物紹介</h1>
    </div>
    <div :class="[AccordionOpen ? 'NarrowDownSummary' : '']" style="margin: 2rem auto;">

        <div style="height: 4em; display: flex; align-items: end;">
            <button class="Accordion btn" @click="AccordionOpen = !AccordionOpen">
                <img src="../assets/AccordionIcon.svg" class="AccordionIcon" :style="{ Transform: [AccordionOpen ? '' : 'rotate(-90deg)']}" />絞り込み
            </button>
        </div>

        <div v-show="AccordionOpen" class="SelectCategory CheckBox">

            <div class="CheckBoxTitle">
                カテゴリ
            </div>

            <div class="CategoryBox">

                <div v-for="(CategoryId, Category) in Categorys" :key="'Category' + Category">
                    <label :for="'Category' + CategoryId">
                        <input type="checkbox" :id="'Category' + CategoryId" v-model="CategoryChecked" :value="CategoryId" />
                        {{ Category }}
                    </label>
                </div>
            </div>
        </div>

        <div v-show="AccordionOpen" class="SelectGrade CheckBox">

            <div class="CheckBoxTitle">
                学年など
            </div>

            <div class="GradeBox">

                <div v-for="(GradeId, Grade) in Grades" :key="'Grade' + Grade">
                    <label :for="'Grade' + Grade">
                        <input type="checkbox" :id="'Grade' + Grade" v-model="GradeChecked" :value="GradeId" />
                        {{ Grade }}
                    </label>
                </div>
           </div>
        </div>
    </div>
    <div class="StoreBoxes">
        <div class="IntroStoreBox" v-for="StoreID of DisplayStoreList" >
            <StoreDiscriptionBox  :StoreID="StoreID" :StoreData="StoreDatas.find(d =>{return d.id == StoreID})"  />
        </div>
    </div>
</template>

<style scoped>

    .StoreBoxes {
        display: flex;
        flex-flow: row wrap;
        gap: 2rem;
        margin: auto;
        justify-content:center;
    }
    .IntroStoreBox {
        max-width: 40%;
        flex-shrink: 0;
        width: 15em;
        margin: 0;
    }

    .CheckBox{
        max-height: 9em;
        margin: auto;
        height: fit-content;
        background-color: #ffffff;
        box-shadow: 0 0em 0.7em 0.2em rgba(0, 0, 0, 0.2);
        font-weight: bold;
        padding: 0.5em;
        display: flex;
        flex-flow: column;
        flex-wrap: wrap;
    }
    .CheckBoxTitle{
        font-size: 1.5em;
        margin: auto;
    }

    .CategoryBox{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: auto;
    }

    .GradeBox{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: auto;
    }

    *,
    *:before,
    *:after {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
    }
    .btn {
        padding: 0;
    }
    .NarrowDownSummary {
        width: fit-content;
        max-width: 80%;
        margin: 2rem auto;
        height: fit-content;
        background-color: #ffffff;
        box-shadow: 0 0em 0.7em 0.2em rgba(0, 0, 0, 0.2);
        font-weight: bold;
        text-decoration: none;
        padding: 0.5em;
    }
    .Accordion {
        cursor: pointer;
        font-size: 1.7em;
        border: none;
        bottom: 0;
        color: #ffffff;
        background-color: rgb(158, 158, 158);
        display: flex;
        width: auto;
        border-bottom: 2px solid rgb(88, 88, 88);
        -webkit-box-shadow: 0 0px 5px rgba(0, 0, 0, 3);
        box-shadow: 0 0px 5px rgba(0, 0, 0, 3);
        margin: 0 auto 0.5em;
        padding: auto 0.1em;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
    .Accordion:hover {
        color: #ffffff;
        background: rgb(158, 158, 158);
        border-bottom: 0px solid rgb(88, 88, 88);
    }
    .SelectCategory {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: auto;
    }
    label {
        white-space: nowrap;
    }

    .AccordionIcon {
        height: 0.35em;
        margin: 0 0.3em 0;
    }
</style>