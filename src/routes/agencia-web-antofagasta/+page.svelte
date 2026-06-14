<script lang="ts">
  import CityPage from '$lib/components/CityPage.svelte';
  import { getCity } from '$lib/content/cities';
  const data = getCity('agencia-web-antofagasta')!;
</script>
<CityPage {data} />
