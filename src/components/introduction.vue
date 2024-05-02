<script setup>
    import { ref, computed } from 'vue';
    import StoreDatasSample from '../assets/StoreDatasSample.json';
    import StoreDiscriptionBox from './StoreDiscriptionBox.vue';

    const StoreDatas = ref(StoreDatasSample);

    const StoreIDs = ref(Object.keys(StoreDatas.value));

    const CategoryChecked = ref([]);
    const CategoryAll = ref(0);

    const GradeChecked = ref([]);
    const GradeAll = computed(() => {
        var result2 = ref(0);
        for (var i of GradeChecked.value) {
            result2.value = (result2.value | Number(i));
        }
        return result2.value;
    });

    const ShowBox = computed (() => {
        var result3 = ref({});
        for (var StoreID in StoreDatas.value) {
            console.log(StoreID);
            console.log(StoreDatas.value[StoreID].Category);
            if ((StoreDatas.value[StoreID].Category & CategoryAll) || (StoreDatas.value[StoreID].Grade & GradeAll)) {
                result3.value[StoreID] = true;
            }
        }
        return result3.value;
    }
);

    const AccordionOpen = ref(false);
</script>

<template>
    <div>
        <h1>出し物紹介</h1>
    </div>
    {{ CategoryChecked }}
    {{ CategoryAll }}
    {{ ShowBox }}
    <div class="NarrowDownSummary"><button class="Accordion btn" @click="AccordionOpen = !AccordionOpen">絞り込み</button>
        <div v-show="AccordionOpen" class="SelectCategory CheckBox">

            <input type="checkbox" id="food" v-model="CategoryChecked" value=64 />
            <label for="food">食販</label>

            <input type="checkbox" id="cafe" v-model="CategoryChecked" value=32 />
            <label for="cafe">飲食店</label>

            <input type="checkbox" id="shop" v-model="CategoryChecked" value=16 />
            <label for="shop">物販</label>

            <input type="checkbox" id="attraction" v-model="CategoryChecked" value=8  />
            <label for="attraction">体験型</label>

            <input type="checkbox" id="display" v-model="CategoryChecked" value=4  />
            <label for="display">展示</label>

            <input type="checkbox" id="event" v-model="CategoryChecked" value=2  />
            <label for="event">イベント</label>

            <input type="checkbox" id="other" v-model="CategoryChecked" value=1  />
            <label for="other">その他</label>
        </div>

        <div v-show="AccordionOpen" class="SelectGrade CheckBox">

            <input type="checkbox" id="first" v-model="GradeChecked" value=16 />
            <label for="firdt">1年生</label>

            <input type="checkbox" id="second" v-model="GradeChecked" value=8 />
            <label for="second">2年生</label>

            <input type="checkbox" id="third" v-model="GradeChecked" value=4 />
            <label for="third">3年生</label>

            <input type="checkbox" id="club" v-model="GradeChecked" value=2  />
            <label for="club">部活</label>

            <input type="checkbox" id="other" v-model="GradeChecked" value=1  />
            <label for="other">その他</label>
        </div>
    </div>

    <div class="StoreBox" v-for="StoreID in StoreIDs" :key="StoreID">
        <StoreDiscriptionBox v-show="(StoreDatas[StoreID].Category & CategoryAll) || (StoreDatas[StoreID].Grade & GradeAll)" :StoreID="StoreID" :StoreData=StoreDatas[StoreID]  />
    </div>
</template>

<style>

    .CheckBox{
        padding: auto;
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
        font-size: 1.5em;
    }
    .Accordion {
        cursor: pointer;
        font-size: 1.7em;
        border: none;
        color: #ffffff;
        background-color: rgb(158, 158, 158);
        display: flex;
        width: auto;
        border-bottom: 5px solid rgb(88, 88, 88);
        -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 3);
        box-shadow: 0 3px 5px rgba(0, 0, 0, 3);
        margin: auto;
        padding: auto 0.1em;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
    .Accordion:hover {
        color: #ffffff;
        background: rgb(158, 158, 158);
        border-bottom: 2px solid rgb(88, 88, 88);
    }
</style>