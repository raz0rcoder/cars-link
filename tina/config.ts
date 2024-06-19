import { defineConfig } from "tinacms"

import { FeaturedIcons } from "../components/icons"
import { IconSelector } from "./icon-select"

export default defineConfig({
  branch: process.env.VERCEL_GIT_COMMIT_REF || "",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "/img",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Page",
        path: "content/pages",
        format: "md",
				
		// fiverr.com/creativitas setup
     	ui: {
          router: ({ document }) => {
            if (document._sys.filename === 'base_template') {
              return '/'
            }
			// example if your need to add another page
//          if (document._sys.filename === 'home') {
//            return `/home/`
//          }
//			example for your about page
//          if (document._sys.filename === 'about') {
//            return `/about/`
//          }
            if (document._sys.filename === '2024') {
              return `/`
            }
            if (document._sys.filename === '2025') {
              return `/2025/${document._sys.filename}`
            }
            return undefined
          },
        },
		
		// your default ui
    //    ui: {
    //      router: (props) => {
    //        return "/"
    //      },
    //    },
        fields: [
          {
            type: "string",
            name: "carName",
            label: "Car Name",
          },
          {
            type: "image",
            name: "bannerImage",
            label: "Banner Image",
            isBody: true,
          },
          {
            name: "blocks",
            label: "Blocks",
            type: "object",
            list: true,
            templates: [
              {
                name: "SpecList",
                label: "SpecList",
                fields: [
                  {
                    name: "features",
                    label: "Features",
                    type: "object",
                    list: true,
                    ui: {
                      itemProps: (item) => {
                        return { label: item.label, label2: item.label2, icon: item.icon, icon2: item.icon2 }
                      },
                    },
                    fields: [
                      {
                        type: "image",
                        name: "icon",
                      },
                      { 
                        type: "string", 
                        name: "label",
                      },
                      {
                        type: "string", name: "link",
                      },
                      {
                        type: "image",
                        name: "icon2",
                      },
                      { type: "string", name: "label2" },
                      {
                        type: "string", name: "link2",
                      },
                    ],
                  },
                ],
              },
              {
                name: "BlogSection",
                label: "BlogSection",
                fields: [
                  {
                    type: "image",
                    name: "blogImage",
                    label: "Blog Image",
                    isBody: true,
                  },
                  {
                    name: "message",
                    type: "string",
                  },
                  {
                    name: "link",
                    type: "string",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "subpage",
        label: "Subpage",
        path: "content/subpage",
        format: "md",
		
		ui: {
		itemProps: (item) => {
		return { label: item?.bannerName };
			},
		},
		
		
		// default first setup
    //    ui: {
    //      router: (props) => {
    //        return "/subpage"
    //      },
    //    },
	
        fields: [
          {
            type: "string",
            name: "bannerName",
            label: "Banner Name",
          },
          {
            type: "image",
            name: "bannerImage",
            label: "Banner Image",
            isBody: true,
          },
          {
            name: "blocks",
            label: "Blocks",
            type: "object",
            list: true,
            templates: [
              {
                name: "QuickTip",
                label: "QuickTip",
                fields: [
                  {
                    name: "body",
                    label: "Body",
                    type: "rich-text",
                    isBody: true,
                  },
                ],
              },
              {
                name: "Reminders",
                label: "Reminders",
                fields: [
                  {
                    name: "body",
                    label: "Body",
                    type: "rich-text",
                    isBody: true,
                  },
                ],
              },
              {
                name: "Content",
                label: "Content",
                fields: [
                  {
                    type: "string",
                    name: "contentName",
                    label: "Content Name",
                  },
                  {
                    name: "body",
                    label: "Body",
                    type: "rich-text",
                    isBody: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      // {
      //   name: "post",
      //   label: "Post",
      //   path: "content/posts",
      //   format: "md",
      //   fields: [
      //     {
      //       name: "title",
      //       label: "Title",
      //       type: "string",
      //     },
      //     {
      //       name: "author",
      //       label: "Author",
      //       type: "reference",
      //       collections: ["author"],
      //     },
      //     {
      //       name: "image",
      //       label: "Image",
      //       type: "image",
      //     },
      //     {
      //       name: "description",
      //       label: "Description",
      //       type: "string",
      //       ui: {
      //         component: "textarea",
      //       },
      //     },
      //     {
      //       name: "body",
      //       label: "Body",
      //       type: "rich-text",
      //       isBody: true,
      //     },
      //   ],
      // },
      // {
      //   name: "author",
      //   label: "Author",
      //   path: "content/authors",
      //   format: "md",
      //   fields: [
      //     {
      //       name: "name",
      //       label: "Name",
      //       type: "string",
      //     },
      //     {
      //       name: "image",
      //       label: "Image",
      //       type: "image",
      //     },
      //   ],
      // },
      {
        name: "nav",
        label: "Nav",
        path: "content/nav",
        format: "md",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          global: true,
        },
        fields: [
          {
            name: "links",
            label: "Links",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item.label }
              },
            },
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "link", label: "Link" },
            ],
          },
        ],
      },
    ],
  },
})
