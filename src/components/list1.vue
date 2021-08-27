<template>
  <div class="list-wrapper">
    <div class="header">
      <h3>{{ title }}</h3>
      <span v-show="desc">{{ desc }}</span>
    </div>
    <div class="content">
      <slot name="head">
        <div class="head">标题</div>
      </slot>
      <div class="body">
        <ul ref="ulRef" @transitionend="handleTransitionEnd" @mouseenter="handlerEnter" @mouseleave="handlerLeave">
          <slot name="item" :item="item" v-for="item in renderData" :key="item.id">
            <li>{{ item.name }}</li>
          </slot>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, computed, defineProps, withDefaults, reactive, ref} from "vue";
interface IProps {
  title: string
  desc?: string
  timeout: number
  list: IList[]
}

interface IList {
  name: string
  location: string
  count: number
  amount: number
  id: string | number
}

const props = withDefaults(defineProps<IProps>(), {
      title: '标题',
      timeout: 5000,
      list: () => {
        let res: IList[] = []
        for (let i = 0; i < 11; i++) {
          res.push({name: `商品名称${i + 1}`, location: `中心库${i + 1}`, count: 5, amount: 99, id: i + 1})
        }
        return res
      }
    }
)
const ulRef = ref<HTMLElement | null>(null)
const timer = ref<number | null>(null)

const listData = reactive(props.list)

const renderData = computed<IList[]>(() => listData.slice(0, 10))
const scrollToOpen = computed(() => listData.length > 5)

const handleTransitionEnd = () => {
  listData.push(...listData.splice(0, 5))
  if (ulRef.value) {
    ulRef.value.style.transition = 'none'
    ulRef.value.style.top = '0px'
  }
}

const handlerEnter = () => {
  if (!scrollToOpen) return
  if (timer.value) clearInterval(timer.value)
}

const handlerLeave = () => {
  if (!scrollToOpen) return
  timer.value = setInterval(() => {
    if (ulRef.value) {
      ulRef.value.style.transition = 'top 0.5s'
      ulRef.value.style.top = '-180px'
    }
  }, props.timeout)
}

onMounted(() => {
  handlerLeave()
})

</script>

<style lang="scss" scoped>
.list-wrapper {
  display: flex;
  flex-direction: column;
  padding: 10px
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: #557FB6;
    margin: 10px;
  }

  span {
    color: #999;
    font-size: 14px;
  }
}

.content {
  flex: 1;

  .head {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #cccccc;
    background-color: #1D408A;
  }

  .body {
    overflow: hidden;
    max-height: 180px;

    ul {
      position: relative;
      top: 0;
      list-style: none;
      margin: 0;
      padding: 0;
      transition: top 0.5s;
    }

    li {
      height: 36px;
      line-height: 36px;
      font-size: 14px;
      color: #ccc;
    }
  }
}
</style>
