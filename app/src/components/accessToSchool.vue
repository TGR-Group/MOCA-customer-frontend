<template>
    <h1>アクセス</h1>

    <div class="accessList">
        <ul>
            <li>〇〇駅より徒歩〇〇分</li>
            <li>バスでお越しの方は、〇〇線に乗ってお越しください</li>
            <li>最寄りのバス停：〇〇</li>
        </ul>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.7327643938415!2d139.3348256764042!3d36.4156603892807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ee25ad5200cf7%3A0x36d37301372b87a8!2z5qGQ55Sf56ys5LiA6auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1720536160353!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</template>

<style scoped>
    .accessList {
        font-size: 1.2em;
        font-weight: bold;
        text-align: left;
        width: 80%;
        margin: 1.5em auto;
        padding: 0;
    }
    .accessList ul {
        padding: 0;
        margin: 0 0 0 1em;
    }
    #googleMap {
        width: 100%;
    }
</style>