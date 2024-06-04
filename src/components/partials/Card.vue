<script>
  export default {
    data(){
      return{
      }
    },
    props:{
      id: Number,
      title: String,
      type: String,
      description : String,
      color: String
    }
  };
</script>

<template>
  <div class="col-md-4 col-sm-6 content-card">
      <div class="card-big-shadow">
          <div class="card card-just-text" data-background="color" :data-color="color" data-radius="none">
              <div class="content">
                  <h6 class="category">Type: {{ type }}</h6>
                  <h4 class="title"> <router-link :to="{ name: 'projectInfo', params: { id: id } }">{{ title }}</router-link></h4>
                  <p class="description"><strong>Description: </strong>{{ description }}</p>
              </div>
          </div>
      </div>
  </div>
  
</template>

<style lang="scss" scoped>

.card-big-shadow {
    max-width: 320px;
    position: relative;

    &:before {
        background-image: url("http://static.tumblr.com/i21wc39/coTmrkw40/shadow.png");
        background-position: center bottom;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        bottom: -12%;
        content: "";
        display: block;
        left: -12%;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 0;
    }
}

.coloured-cards .card {
    margin-top: 30px;
}

.card[data-radius="none"] {
    border-radius: 0px;
}

.card {
    border-radius: 8px;
    box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);
    background-color: #FFFFFF;
    color: #252422;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;

    &[data-background="image"] {
        .title, .stats, .category, .description, .content, .card-footer, small, a {
            color: #FFFFFF;
        }
    }

    &[data-background="color"] {
        .title, .stats, .category, .description, .content, .card-footer, small, a {
            color: #FFFFFF;
        }
    }

    &.card-just-text {
        .content {
            padding: 50px 65px;
            text-align: center;
        }
    }

    .content {
        padding: 20px 20px 10px 20px;

        .description {
            font-size: 16px;
            color: #66615b;
        }
    }

    &[data-color="blue"] {
        background: #b8d8d8;

        .description {
            color: #506568;
        }

        .category {
            color: #7a9e9f;
        }
    }

    &[data-color="green"] {
        background: #abd474;

        .description {
            color: #60773d;
        }

        .category {
            color: #92ac56;
        }
    }

    &[data-color="yellow"] {
        background: #f4f56e;

        .description {
            color: #b25825;
        }

        .category {
            color: #d88715;
        }
    }

    &[data-color="brown"] {
        background: #e6d3a7;

        .description {
            color: #75442e;
        }

        .category {
            color: #a47e65;
        }
    }

    &[data-color="purple"] {
        background: #bc8dbf;

        .description {
            color: #3a283d;
        }

        .category {
            color: #5a283d;
        }
    }

    &[data-color="orange"] {
        background: #f7941d;

        .description {
            color: #772510;
        }

        .category {
            color: #e95e37;
        }
    }
}

.category, .label {
    font-size: 14px;
    margin-bottom: 0px;
}

h4, .h4 {
    font-size: 1.5em;
    font-weight: 600;
    line-height: 1.2em;
}

h6, .h6 {
    font-size: 0.9em;
    font-weight: 600;
    text-transform: uppercase;
}

.content-card {
    margin-top: 30px;
}
a:hover{
  text-decoration: none;
}
</style>