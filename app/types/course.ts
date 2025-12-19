// types/course.ts

export interface CourseInstructor {
  id: number;
  slug: string;
  name: string;
  avatar: string;
  url: string;
}

export interface CourseLesson {
  tieu_de_tung_bai: string;
  url_video_tung_bai: string;
}

export interface CourseChapter {
  tieu_de_chuong: string;
  so_video_cua_chuong: string;
  so_bai_viet_cua_chuong: string;
  tung_bai: CourseLesson[];
}

export interface CourseFile {
  noi_up_file: {
    ID?: number;
    filename: string;
    filesize: number;
    url: string;
    link?: string;
    mime_type?: string;
  };
}

export interface CourseItem {
  /* ================= BASIC ================= */
  id: number;
  slug: string;
  title: string;
  url?: string;
  image: string;

  level?: string;

  instructor?: CourseInstructor[];

  /* ================= STATS ================= */
  followers?: number;
  saved?: number;
  language?: string;

  duration: {
    lessons: number;
    text?: string;
  };

  /* ================= CONTENT ================= */
  description?: string;

  articles?: number;          // số bài viết
  download_files?: number;    // số file tải

  what_you_will_learn?: {
    neu_hoc_duợc_gi: string;
  }[];

  topics?: {
    how_to_guide: string;
  }[];

  chapters?: CourseChapter[];

  files?: CourseFile[];

  /* ================= EXTRA ================= */
  more_courses?: CourseItem[]; // ✅ dùng cho "Other Courses"
}
