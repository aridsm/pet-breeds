import { onMounted } from "vue";

function useHead() {
  function changeHeaderData(title, desc) {
    document.title = title + " | Pet breeds";
    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", desc);
  }

  return { changeHeaderData };
}

export default useHead;
