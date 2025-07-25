<script setup>
import { ref, watch } from 'vue'

const props = defineProps({modelValue:[File,Array,null],preview: {type: Boolean,default:true},multiple: {type: Boolean,default:false},
               width: String, height:String, type:String})
const emit = defineEmits(['update:modelValue'])

let input=ref(null)
let files=ref(props.modelValue||null)
let show_preview=ref(props.preview)
let multiple=ref(props.multiple)
let style=`width:${props.width||'100%'};height:${props.height||'100%'};${props.type=='circle'?'border-radius:50%;':''}`
let file_icon=`M9 17H15M9 13H15M9 9H10M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 
          5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 
          17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 
          8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19`

const trigger=()=> {input.value?.click()}

function update(event){
    if(event.target.files.length>0){
      if(multiple.value==true){
        files.value=Array.from(event.target.files)
      }
      else {
        files.value=event.target.files[0]
      }
    }
    emit('update:modelValue',files.value)
}

watch(() => props.modelValue, (val) => {
  if(val instanceof FileList)val=Array.from(val)
  files.value = val
})

function remove(index) {
  if(index!=null){
    files.value.splice(index, 1)
  }
  else {
    files.value=null
    input.value.value=''
  }
  emit('update:modelValue',files.value)
}

function create(data){
  return URL.createObjectURL(data)
}

function formatSize(bytes) {
  const kb = bytes / 1024
  if (kb < 1024) return `${kb.toFixed(1)} KB`
  return `${(kb / 1024).toFixed(2)} MB`
}
</script>
<style scoped>
.dj-fileinput{
  max-width:100%;
}
.dj-fileinput input{
  display: none;
}
.dj-fileinput-button{
  background-color: var(--dj-fileinput-btn-bg,#e9dddd);
  border: 2px solid var(--dj-fileinput-btn-border,gray);
  color:var(--dj-fileinput-btn-color,black);
  border-radius: 10px;
  font-size: .9rem;
}
.dj-fileinput-button:active{
  border: 1px solid #e9e5e5;
}
.dj-fileinput-close{
  background-color: var(--dj-fileinput-close-btn-bg,#b41515);
  color:var(--dj-fileinput-close-color,white);
  margin-right: .5rem;
  border-radius: 5px;
}
.dj-fileinput-label{
  font-size: .8rem;
}
.dj-fileinput-preview{
  margin-bottom: .5rem;
}
</style>
<template>
  <div class="dj-fileinput">
    <div v-if="files" class="dj-fileinput-preview">
        <template v-if="multiple==true">
          <div v-for="(f,index) in files" class="dj-fileinput-control">
            <template v-if="show_preview">
              <img v-if="f.type.startsWith('image/')" :src="create(f)" class="dj-fileinput-img" :style="style"/>
              <svg v-else :style="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path :d="file_icon" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
            <br>
            <button @click="remove(index)" class="dj-fileinput-close" title="remove">x</button>
            <span class="dj-fileinput-label">{{ f.name }}( {{ formatSize(f.size) }})</span>
          </div>
        </template>
        <div v-else class="dj-fileinput-control">
          <template v-if="show_preview">
            <img v-if="files.type.startsWith('image/')" :src="create(files)" class="dj-fileinput-img" :style="style"/>
            <svg v-else :style="style" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path :d="file_icon" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
          <br>
          <button @click="remove(null)" class="dj-fileinput-close" title="remove">x</button>
          <span class="dj-fileinput-label">{{ files.name }}( {{ formatSize(files.size) }})</span>
        </div>
    </div>
    <div>
      <button type="button" class="dj-fileinput-button" @click="trigger">
        <slot>Select File...</slot>
      </button>
    </div>
    <input type="file" ref="input" :multiple="multiple" @change="update"/>
  </div>
</template>