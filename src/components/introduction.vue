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
                <label for="food">
                    <input type="checkbox" id="food" v-model="CategoryChecked" value=64 />
                        食販
                </label>

                <label for="cafe">
                    <input type="checkbox" id="cafe" v-model="CategoryChecked" value=32 />
                        飲食店
                </label>

                <label for="shop">
                    <input type="checkbox" id="shop" v-model="CategoryChecked" value=16 />
                        物販
                </label>

                <label for="attraction">
                    <input type="checkbox" id="attraction" v-model="CategoryChecked" value=8  />
                        体験型
                </label>

                <label for="display">
                    <input type="checkbox" id="display" v-model="CategoryChecked" value=4  />
                        展示
                </label>

                <label for="event">
                    <input type="checkbox" id="event" v-model="CategoryChecked" value=2  />
                        イベント
                </label>

                <label for="OtherCategory">
                    <input type="checkbox" id="OtherCategory" v-model="CategoryChecked" value=1  />
                        その他
                </label>
            </div>
        </div>

        <div v-show="AccordionOpen" class="SelectGrade CheckBox">

            <div class="CheckBoxTitle">
                学年など
            </div>

            <div class="GradeBox">
                <label for="firdt">
                    <input type="checkbox" id="first" v-model="GradeChecked" value=16 />
                        1年生
                </label>

                <label for="second">
                    <input type="checkbox" id="second" v-model="GradeChecked" value=8 />
                        2年生
                </label>

                <label for="third">
                    <input type="checkbox" id="third" v-model="GradeChecked" value=4 />
                        3年生
                </label>

                <label for="club">
                    <input type="checkbox" id="club" v-model="GradeChecked" value=2  />
                        部活
                </label>

                <label for="OtherGrade">
                    <input type="checkbox" id="OtherGrade" v-model="GradeChecked" value=1  />
                その他
                </label>

            </div>
        </div>
    </div>

    <div class="StoreBox" v-for="StoreID in StoreIDs" >
        <StoreDiscriptionBox v-show="CategoryAll == 0 && (StoreDatas[StoreID].Grade & GradeAll) != 0 || (StoreDatas[StoreID].Category & CategoryAll) != 0 && GradeAll == 0 || (StoreDatas[StoreID].Category & CategoryAll) != 0 && (StoreDatas[StoreID].Grade & GradeAll) != 0 || (CategoryAll + GradeAll) == 0" :StoreID="StoreID" :StoreData=StoreDatas[StoreID]  />
    </div>
</template>

<style>

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