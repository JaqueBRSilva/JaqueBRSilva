export interface IFeaturedProjectsData {
    id: number | string | any;
    project_name: string,
    project_type: string, 
    url_preview_img: string,
    url_demo_link: string,
    url_github_link: string,
    description: string,
    used_languages: Array<string>       
}