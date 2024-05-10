<script setup>
    import { ref, computed } from 'vue';
    import StoreDatasSample from '../assets/StoreDatasSample.json';
    import StoreDiscriptionBox from './StoreDiscriptionBox.vue';

    const StoreDatas = ref(StoreDatasSample);

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


    const Categorys = ref({
        64: "その他",
        32: "イベント",
        16: "展示",
        8: "体験型",
        4: "物販",
        2: "飲食店",
        1: "食販"
    });

    const Grades = ref({
        16: "その他",
        8: "部活",
        4: "3年生",
        2: "2年生",
        1: "1年生"
    });

    const DisplayStoreList = computed(() => {
        var result = [];
        for (var i of StoreIDs.value) {
            if (CategoryAll.value == 0 && (StoreDatas.value[i].Grade & GradeAll.value) != 0 || (StoreDatas.value[i].Category & CategoryAll.value) != 0 && GradeAll.value == 0 || (StoreDatas.value[i].Category & CategoryAll.value) != 0 && (StoreDatas.value[i].Grade & GradeAll.value) != 0 || (CategoryAll.value + GradeAll.value) == 0) {
                result.push(i);
            }
        }
        return result;
    });

    const AccordionOpen = ref(false);
</script>

<template>
    <div>
        <h1>出し物紹介</h1>
    </div>
    <div :class="[AccordionOpen ? 'NarrowDownSummary' : '']"><button class="Accordion btn" @click="AccordionOpen = !AccordionOpen">絞り込み</button>
        <div v-show="AccordionOpen" class="SelectCategory CheckBox">

            <div class="CheckBoxTitle">
                カテゴリ
            </div>

            <div class="CategoryBox">

                <div v-for="(Category, CategoryID) in Categorys" :key="'Category' + CategoryID">
                    <label :for="'Category' + Category">
                        <input type="checkbox" :id="'Category' + Category" v-model="CategoryChecked" :value="CategoryID" />
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

                <div v-for="(Grade, GradeID) in Grades" :key="'Grade' + GradeID">
                    <label :for="'Grade' + GradeID">
                        <input type="checkbox" :id="'Grade' + GradeID" v-model="GradeChecked" :value="GradeID" />
                        {{ Grade }}
                    </label>
                </div>
           </div>
        </div>
    </div>
    <div class="StoreBoxes">
        <div class="IntroStoreBox" v-for="StoreID in DisplayStoreList" >
            <StoreDiscriptionBox  :StoreID="StoreID" :StoreData=StoreDatas[StoreID]  />
        </div>
    </div>
</template>

<style scoped>

    .StoreBoxes {
        display: flex;
        flex-flow: row wrap;
        gap: 1em;
        margin: auto;
        justify-content:center;
    }
    .IntroStoreBox {
        max-width: 45%;
        flex-shrink: 0;
        width: 15em;
    }

    .CheckBox{
        width: 100%;
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
    .StoreBox {
        margin: 1.5em 0;
        height: fit-content;
    }
    .NarrowDownSummary {
        width: fit-content;
        max-width: 80%;
        margin: auto;
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
        color: #ffffff;
        background-color: rgb(158, 158, 158);
        display: flex;
        width: auto;
        border-bottom: 3px solid rgb(88, 88, 88);
        -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 3);
        box-shadow: 0 3px 5px rgba(0, 0, 0, 3);
        margin: 0 auto 0.5em;
        padding: auto 0.1em;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
    .Accordion:hover {
        color: #ffffff;
        background: rgb(158, 158, 158);
        border-bottom: 1px solid rgb(88, 88, 88);
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
</style>