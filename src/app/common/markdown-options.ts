import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';

export function MarkdownOptionsFactory(): MarkedOptions {
    const renderer = new MarkedRenderer();

   /* renderer.heading = ((text, level) => {
        let size: string;
        switch (level) {
            case 1:
                size = 'text-3xl md:text-4xl lg:text-5xl apollon mt-2 md:mt-4 text-purple-400 md:col-end-11 md:col-start-5 lg:col-start-4 lg:col-end-9';
                break;
            case 2:
                size = 'text-2xl md:text-3xl apollon text-purple-400 md:col-start-1 md:col-end-5 lg:col-end-4 row-span-2';
                break;
            case 3:
                size = 'text-xl md:text-2xl apollon text-purple-400 md:col-start-1 md:col-end-5 lg:col-end-4 row-span-2';
                break;
            case 4:
                size = 'text-lg md:text-2xl md:col-start-5 md:col-end-12 lg:col-start-4';
                break;
            case 5:
                size = 'text-lg md:text-xl md:col-start-5 md:col-end-12 lg:col-start-4';
                break;
            case 6:
                size = 'text-lg md:text-xl md:col-start-5 md:col-end-12 lg:col-start-4';
                break;
        }
        return `<h${level} class="font-massa ${size}">${text}</h${level}>`;
    });

    renderer.link = (href, title, text) => {
        return '<a href="' + href + '" target="_blank">' + text + '</a>';
    };

    renderer.table = (header: string, body: string) => {
        return '<table class="table-auto"><thead>' + header + '</thead><tbody>' + body + '</tbody></table>';
    };

    renderer.tablerow = (content: string) => {
        return `<tr class="hover:bg-gray-800">${content}</tr>`;
    };

    renderer.tablecell = (content: string, flags: {
        header: boolean;
        align: 'center' | 'left' | 'right' | null;
    }) => {

        let textAlign: string;
        switch (flags.align) {
            case 'center':
                textAlign = 'text-center';
                break;
            case 'left':
                textAlign = 'text-left';
                break;
            case 'right':
                textAlign = 'text-right';
                break;
            case null:
                textAlign = '';
                break;
        }

        if (flags.header) {
            return '<th class="px-4 py-2 ' + textAlign + '">' + content + '</th>';
        }
        if (!flags.header) {
            return '<td class="border px-4 py-2' + textAlign + '">' + content + '</td>';
        }
    };

    renderer.list = (body: string, ordered: boolean, start: number) => {
        if (ordered) {
            return '<ol class="md:col-start-5 md:col-end-12 lg:col-start-4 lg:col-end-10 tracking-wides list-decimal list-inside pl-4">' + body + '</ol>';
        }
        return '<ul class=" md:col-start-5 md:col-end-12 lg:col-start-4 lg:col-end-10 tracking-wides list-disc list-inside pl-4">' + body + '</ul>';
    };

    renderer.listitem = (text: string) => {
        return '<li>' + text + '</li>';
    };

    renderer.image = (href: string, title: string, text: string) => {
        return '<div class="flex flex-col w-full justify-center md:col-start-5 md:col-end-12 lg:col-start-4 lg:col-end-10"><img class="object-contain max-h-50" src="'
            + href + '" alt="' + text + '"></div>';
    };

    /!*<p class="text-center mt-2 text-gray-400 text-sm">' + text + '</p>*!/

    renderer.blockquote = (quote: string) => {
        return `<div class="border-l-4 pl-4 rounded-l py-1 my-1 text-xl">${quote}</div>`;
    };

    renderer.link = (href: string, title: string, text: string) => {
        return `<a class="text-purple-200 font-massa hover:text-purple-600" href="${href}">${text}</a>`;
    };

    renderer.text = (text: string) => {
        return text;
    };

    renderer.paragraph = (text: string) => {
        return !!text && !!text.length ? `<p class="md:col-start-5 md:col-end-12 lg:col-start-4 lg:col-end-10 tracking-wides">${text}</p>` : '<p class="invisible"></p>';
    };

    renderer.br = () => '';
*/
    return {
        renderer,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
    };
}
