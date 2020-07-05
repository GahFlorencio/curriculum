<template>
  <div :v-if="repos">
    <h1 class="text-xl font-bold text-drakula-orange">Projects</h1>
    <div
      v-for="repo in repos"
      :key="repo.id"
      class="bg-drakula-comment shadow-lg overflow-hidden rounded-lg mb-10"
    >
      <div class="px-4 py-5 border-b border-drakula-current sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-drakula-pink underline">
          <a :href="repo.html_url"> {{ repo.name }}</a>
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-5 text-drakula-green">
          {{ repo.description }}
        </p>
      </div>
      <div>
        <dl>
          <div
            class="border-b border-drakula-current px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm leading-5 font-medium text-drakula-purple">
              Created At:
            </dt>
            <dd
              class="mt-1 text-sm leading-5 text-drakula-yellow sm:mt-0 sm:col-span-2"
            >
              {{ new Date(repo.created_at).toLocaleDateString() }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  props: ["repos"]
};
</script>

