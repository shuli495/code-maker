import { osLocaleSync } from 'os-locale';

export const language = osLocaleSync().split('-')[0].toLocaleLowerCase() === 'zh' ? 'zh' : 'en';

/**
 * 操作项
 */
export type optionsNameType =
    | 'type'
    | 'host'
    | 'port'
    | 'user'
    | 'password'
    | 'database'
    | 'tableName'
    | 'template'
    | 'templatePath'
    | 'params'
    | 'paramsPath'
    | 'saveFileRootPath';

/**
 * 操作类型
 */
export enum optionsType {
    mysql = 'mysql',
    mongo = 'mongo',
}

/**
 * 内置模板类型
 */
export enum templateType {
    pighandSpring = 'pighand-spring',
    pighandKoa = 'pighand-koa',
}

/**
 * 命令行配置
 */
export const cmdConfig = {
    type: {
        name: 'type',
        alias: 't',
        default: optionsType.mysql,
        choices: [optionsType.mysql, optionsType.mongo],
        guideMessage: {
            zh: '🚩请选择操作类型',
            en: '🚩Build source type.',
        },
        description: {
            zh: '操作类型',
            en: 'Build source type.',
        },
    },
    host: {
        name: 'host',
        alias: 'h',
        default: '127.0.0.1',
        guideMessage: {
            zh: '🔗请输入链接地址',
            en: '🔗IP/Hostname for the database',
        },
        description: {
            zh: '数据库地址',
            en: 'IP/Hostname for the database.',
        },
    },
    port: {
        name: 'port',
        alias: 'p',
        default: (dbType?: string) => (dbType && dbType === 'mongo' ? 27017 : 3306),
        guideMessage: {
            zh: '🌼请输入端口',
            en: '🌼Port number for database.',
        },
        description: {
            zh: '数据库端口',
            en: 'Port number for database.',
        },
    },
    user: {
        name: 'user',
        alias: 'u',
        default: 'root',
        guideMessage: {
            zh: '👤请输入数据库用户名',
            en: '👤Username for database.',
        },
        description: {
            zh: '数据库用户名',
            en: 'Username for database.',
        },
    },
    password: {
        name: 'password',
        alias: 'x',
        default: '',
        guideMessage: {
            zh: '🔑请输入数据库密码',
            en: '🔑Password for database.',
        },
        description: {
            zh: '数据库密码',
            en: 'Password for database.',
        },
    },
    database: {
        name: 'database',
        alias: 'd',
        default: '',
        guideMessage: {
            zh: '🏭(*)请输入数据库名',
            en: '🏭(*)Names of database.',
        },
        description: {
            zh: '数据库名',
            en: 'Names of database.',
        },
    },
    tableName: {
        name: 'tableName',
        alias: '',
        default: '',
        guideMessage: {
            zh: '🎯输入表名（多个用空格隔开，不输入生成全部表）',
            en: '🎯Names of tables to import. Multiple use `space` separate. If there is no value, export all tables.',
        },
        description: {
            zh: '表名。多个表用”空格“分开，不填生成所有表。例如：--tableName user role',
            en: 'Names of tables to import. Multiple use `space` separate. If there is no value, export all tables. eg: --tableName user role',
        },
    },
    template: {
        name: 'template',
        alias: 'm',
        default: '',
        choices: (custom?: Array<string>) => {
            let templates: Array<string> = [templateType.pighandSpring, templateType.pighandKoa];
            if (custom) {
                templates = [...templates, ...custom];
            }

            return templates;
        },
        guideMessage: {
            zh: '📄请选择模板',
            en: '📄Using built-in template.',
        },
        description: {
            zh: '使用内置模板',
            en: 'Using built-in template. ',
        },
    },
    templatePath: {
        name: 'templatePath',
        alias: '',
        default: '',
        guideMessage: {
            zh: '🔍(*)请输入模板路径',
            en: '🔍(*)Custom template file path.',
        },
        description: {
            zh: '使用自定义模板，填写模板路径',
            en: 'Using custom template. Template file path.',
        },
    },
    params: {
        name: 'params',
        alias: 'n',
        default: '',
        guideMessage: {
            zh: '🧩请输入参数（例：key1=value&key2=value）',
            en: '🧩Custom params (eg: key1=value&key2=value)',
        },
        description: {
            zh: '自定义模板参数。例：key1=value&key2=value',
            en: 'Custom params. eg: key1=value&key2=value',
        },
    },
    paramsPath: {
        name: 'paramsPath',
        alias: '',
        default: '',
        guideMessage: {
            zh: '🔎请输入参数文件路径（json格式文件）',
            en: '🔎Custom params file path. JSON format file.',
        },
        description: {
            zh: '自定义参数json文件路径',
            en: 'Custom params file path. JSON format file.',
        },
    },
    saveFileRootPath: {
        name: 'saveFileRootPath',
        alias: 'r',
        default: '.',
        guideMessage: {
            zh: '📁请输入保存路径',
            en: '📁Save file root directory.',
        },
        description: {
            zh: '保存文件路径',
            en: 'Save file root directory.',
        },
    },
    command: {
        guide: {
            zh: '按步骤提示生成',
            en: 'build by guide',
        },
    },
    group: {
        db: {
            zh: '数据库相关：',
            en: 'build from db:',
        },
        template: {
            zh: '模板相关：',
            en: 'template config:',
        },
    },
    check: {
        demand: {
            zh: '缺少必选参数：',
            en: 'missing demand parameter: ',
        },
        templateOrPath: {
            zh: 'template或templatePath必选一个',
            en: 'template or templatePath have to choose one',
        },
    },
    ora: {
        building: {
            zh: '生成中...',
            en: 'building...',
        },
        success: {
            zh: '生成完成',
            en: 'success',
        },
        fail: {
            zh: '生成失败',
            en: 'fail',
        },
    },
};

/**
 * 命令行步骤格式
 */
export interface inquirerQuestionsSchema {
    type: string;
    message: string;
    name: string;
    default?: any;
    validate?: any;
    choices?: Array<any>;
    children?: [{ parent?: Array<any>; questions?: Array<inquirerQuestionsSchema> }];
}

/**
 * 命令行步骤选项
 */
export const inquirerQuestions: Array<inquirerQuestionsSchema> = [
    {
        type: 'list',
        message: cmdConfig.type.guideMessage[language],
        name: cmdConfig.type.name,
        choices: cmdConfig.type.choices,
        children: [
            {
                parent: cmdConfig.type.choices,
                questions: [
                    {
                        type: 'input',
                        message: cmdConfig.host.guideMessage[language],
                        name: cmdConfig.host.name,
                        default: cmdConfig.host.default,
                    },
                    {
                        type: 'number',
                        message: cmdConfig.port.guideMessage[language],
                        name: cmdConfig.port.name,
                        default: (input: any) => {
                            const { type } = input;

                            return cmdConfig.port.default(type);
                        },
                    },
                    {
                        type: 'input',
                        message: cmdConfig.user.guideMessage[language],
                        name: cmdConfig.user.name,
                        default: cmdConfig.user.default,
                    },
                    {
                        type: 'input',
                        message: cmdConfig.password.guideMessage[language],
                        name: cmdConfig.password.name,
                    },
                    {
                        type: 'input',
                        message: cmdConfig.database.guideMessage[language],
                        name: cmdConfig.database.name,
                        validate: (input: any) => !!input,
                    },
                    {
                        type: 'input',
                        message: cmdConfig.tableName.guideMessage[language],
                        name: cmdConfig.tableName.name,
                    },
                    {
                        type: 'list',
                        message: cmdConfig.template.guideMessage[language],
                        name: cmdConfig.template.name,
                        choices: cmdConfig.template.choices(['自定义路径']),
                        children: [
                            {
                                parent: ['自定义路径'],
                                questions: [
                                    {
                                        type: 'input',
                                        message: cmdConfig.templatePath.guideMessage[language],
                                        name: cmdConfig.templatePath.name,
                                        validate: (input: any) => !!input,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        type: 'input',
        message: cmdConfig.params.guideMessage[language],
        name: cmdConfig.params.name,
    },
    {
        type: 'input',
        message: cmdConfig.paramsPath.guideMessage[language],
        name: cmdConfig.paramsPath.name,
    },
    {
        type: 'input',
        message: cmdConfig.saveFileRootPath.guideMessage[language],
        name: cmdConfig.saveFileRootPath.name,
        default: cmdConfig.saveFileRootPath.default,
    },
];

/**
 * 初始化扩展参数
 */
export interface Options {
    /** 操作类型 */
    type?: optionsType;

    /** 数据库地址 */
    host: string;

    /** 数据库端口 */
    port?: number;

    /** 数据库用户名 */
    user?: string;

    /** 数据库登录密码 */
    password: string;

    /** 数据库名 */
    database: string;

    /** 生产表名 */
    tableName?: [string];

    /** 内置模板名 */
    template?: templateType;

    /** 自定义模板路径 */
    templatePath?: string;

    /** 自定义参数，格式key1=value&key2=value */
    params?: string;

    /** 参数json文件路径 */
    paramsPath?: string;

    /** 保存文件路径 */
    saveFileRootPath?: string;
}

/**
 * 内部传参
 */
export interface Config extends Options {
    /** 要生成的表名 */
    tableNames?: Array<string>;

    /** 文件扩展名 */
    fileExtension?: string;

    /** 自定义参数 */
    customParams?: any;
}

/**
 * 表信息
 */
export interface TableInfo {
    /** 表明 */
    tableName: string;

    /** 备注 */
    tableComment: string;
}

/**
 * 列信息
 */
export interface ColumnInfo {
    /** 列名 */
    columnName: string;

    /** 列名 驼峰格式 */
    columnHumpName: string;

    /** 是否允许为空 */
    isNullable: boolean;

    /** 数据类型 */
    dataType: string;

    /** 最大长度 */
    characterMaximumLength: number;

    /** 是否主键 */
    columnKey: string;

    /** 是否主键 */
    extra: string;

    /** 备注 */
    columnComment: string;

    /** 表明 */
    tableName: string;

    /** 列类型 */
    columnType: string;
}

/**
 * 模板配置
 */
export interface templateConfig {
    /** 文件名 */
    name: string;

    /** 模板文件 */
    templateFile: string;

    /** 保存目录 */
    saveFilePath?: string;

    /** 保存文件扩展名 */
    fileExtension?: string;
}

/**
 * 模板参数
 */
export interface templateParams {
    /** 数据库表名 */
    tableName: string;

    /** 数据库表名对应文件名 */
    tableFileName: string;

    /** 数据库表名对应驼峰名 */
    tableHumpName: string;

    /** 数据库表备注 */
    tableComment: string;

    /** 数据库表列信息 */
    columns: Array<ColumnInfo>;
}
