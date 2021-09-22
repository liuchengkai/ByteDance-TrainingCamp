<template>
  <div id="container">
    <div id="sidebar">
      <span @mousedown="dragRow">Row</span>
      <span @mousedown="dragCol">Col</span>
      <span @mousedown="dragBtn">Button</span>
    </div>
    <div data-accept-type="row" id="editpanel">
      <div data-accept-type="col" :data-row="ri" class="row" v-for="row, ri of rows" :key="row">
        <div data-accept-type="button" :data-col="ci" class="col" v-for="col, ci of row.cols" :key="col">
          <button v-for="element of col.children" :key="element">{{element.content}}</button>
          </div>
      </div>
    </div>
    <div
      id="draggable"
      :style="{ top: drag.y + 'px', left: drag.x + 'px' }"
      v-if="drag.isDragging"
    >
      draggable
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drag: {
        x0: 0,
        y0: 0,
        dx: 0,
        dy: 0,
        x: 100,
        y: 100,
        isDragging: false,
        type: "none",
      },
      rows: [
      ],
    };
  },
  methods: {
    dragStart(type) {
      this.drag.isDragging = true;
      this.drag.type = type;
      let move = (e) => {
        this.drag.x = e.clientX + 10;
        this.drag.y = e.clientY + 10;
      };
      let up = (e) => {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);
        this.drag.isDragging = false;
        let elementArea = document.elementFromPoint(e.clientX, e.clientY)
        let current = elementArea
        while(current && current.dataset['acceptType'] != type){
          current = current.parent
        }
        if(type == "row"){
          this.rows.push({cols:[]})
        }
        if(type == "col"){
          this.rows[current.dataset["row"]].cols.push({children: []})
        }
        if(type == "button"){
          this.rows[current.parentNode.dataset["row"]].cols[current.dataset["col"]].children.push({content: "button"})
        }
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", up);
    },
    dragRow() {
      this.dragStart("row");
    },
    dragCol() {
      this.dragStart("col");
    },
    dragBtn() {
      this.dragStart("button");
    },
  },
};
</script>

<style>
#container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
}

#sidebar {
  width: 200px;
  background-color: #eeeeee;
}

#sidebar > * {
  width: 60px;
  height: 60px;
  display: inline-block;
  margin: 10px;
  box-sizing: border-box;
  border: solid 1px black;
  user-select: none;
}

#editpanel {
  flex: 1;
  overflow: scroll;
}

.row {
  width: 100%;
  min-height: 300px;
  background-color: #eeee88;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.col {
  height: 200px;
  min-width: 200px;
  margin: 10px;
  background-color: green;
}

#draggable {
  position: absolute;
  box-sizing: border-box;
  width: 60px;
  height: 60px;
  border: solid 1px black;
}
</style>
