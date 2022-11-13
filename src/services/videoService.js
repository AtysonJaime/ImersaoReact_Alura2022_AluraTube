import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/router";

// Create a single supabase client for interacting with your database
const PROJECT_URL = "https://cmefqjfyusiyrvrtrkrg.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtZWZxamZ5dXNpeXJ2cnRya3JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNjYzMDksImV4cCI6MTk4Mzk0MjMwOX0.VOA_T8juwbTUskFrxiwDQOWEbJA5bVx5i2GmXq9DRIE";
const supabase = createClient(PROJECT_URL, API_KEY);

export function videoService() {
  const router = useRouter();
  return {
    postVideo(propsDoVideo) {
      return supabase
        .from("video")
        .insert({
          title: propsDoVideo.values.titulo,
          idVideo: propsDoVideo.values.url.split("v=")[1],
          thumb: propsDoVideo.thumb,
          playlist: propsDoVideo.values.playlist,
        })
        .then((res) => {
          router.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAllVideos() {
      return supabase.from("video").select("*");
    },
  };
}
