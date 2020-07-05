<template>
  <div class="bg-drakula-comment shadow-lg overflow-hidden rounded-lg mb-10">
    <div class="px-2 md:px-4 py-5 border-b border-drakula-current sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-drakula-green">
        {{ mission.role }}
      </h3>
      <p class="mt-1 max-w-2xl text-sm leading-5 text-drakula-yellow">
        {{ mission.company }}
      </p>
    </div>
    <div>
      <dl>
        <div
          class="border-b border-drakula-current px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm leading-5 font-medium text-drakula-foreground">
            Beginning of Adventure
          </dt>
          <dd
            class="mt-1 text-sm leading-5 text-drakula-foreground sm:mt-0 sm:col-span-2"
          >
            {{ mission.starts_at }}
          </dd>
        </div>

        <div
          class="border-b border-drakula-current  bg-drakula-comment px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm leading-5 font-medium text-drakula-foreground">
            End of Adventure
          </dt>
          <dd
            v-if="mission.completed"
            class="mt-1 text-sm leading-5 text-drakula-foreground sm:mt-0 sm:col-span-2"
          >
            {{mission.ends_at}}
          </dd>
          <dd
            v-else
            class="mt-1 text-sm leading-5 text-drakula-green sm:mt-0 sm:col-span-2"
          >
            InProgess
          </dd>
        </div>

        <div
          class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm leading-5 font-medium text-drakula-foreground">
            Description
          </dt>
          <dd
            class="mt-1 text-sm leading-5 text-drakula-yellow sm:mt-0 sm:col-span-2"
          >
            {{mission.description}}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  name: "Missions",
  props: ["mission"],
};
</script>
