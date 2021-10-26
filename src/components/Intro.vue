<template>
  <div class="intro">
    <span class="intro-circle"><i class="fa fa-gift"></i></span>
    <div class="container">
      <div class="intro-content">
        <div class="intro-content__title">
          به آکادمی <span>سیدرو</span> خوش آمدید
        </div>
        <div class="intro-content__subtitle">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </div>
        <button class="intro-content__button">دوره های آموزشی</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.intro {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;

  &-content {
    text-align: center;
    padding: 0.8rem;

    &__title {
      font-size: 2rem;
      font-weight: 600;
      color: #252525;

      span {
        font-weight: bold;
        color: #1bfe7d;
      }
    }

    &__subtitle {
      font-size: 1.1rem;
      color: #252525;
      font-weight: 300;
      margin: 2.2rem 0;
    }

    &__button {
      border: none;
      width: 205px;
      height: 60px;
      font-size: 1.5rem;
      border-radius: 0.5rem;
      background-color: #1bfe7d;
      color: #252525;
      transition: all 0.4s ease-in-out;
      font-weight: bold;

      &:hover {
        background-color: #e0e0e0;
        color: #252525;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  &-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    position: absolute;
    content: "";
    top: 10%;
    left: 20%;
    width: 70px;
    border-radius: 20%;
    height: 70px;
    background-color: #1bfe7d;
    animation: moving infinite 1.2s;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    &-circle {
      width: 35px;
      height: 35px;
      font-size: 1.5rem;
    }
  }
}

@keyframes moving {
  0% {
    transform: rotate(100deg);
  }

  50% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(100deg);
  }
}
</style>