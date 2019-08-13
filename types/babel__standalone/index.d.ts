// Type definitions for @babel/standalone 7.4
// Project: https://github.com/babel/babel/tree/master/packages/babel-standalone
// Definitions by: Elizabeth Craig <https://github.com/ecraig12345>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="babel__core" />

declare namespace Babel {
    function transform(code: string, opts?: babel.TransformOptions): babel.BabelFileResult | null;
    function transformFromAst(ast: babel.Node, code?: string, opts?: babel.TransformOptions): babel.BabelFileResult | null;

    /**
     * Registers a named plugin for use with Babel.
     */
    function registerPlugin(name: string, plugin: babel.PluginItem): void;

    /**
     * Registers multiple plugins for use with Babel. `newPlugins` should be an object where the key
     * is the name of the plugin, and the value is the plugin itself.
     */
    function registerPlugins(plugins: { [name: string]: babel.PluginItem }): void;

    /**
     * Registers a named preset for use with Babel.
     */
    function registerPreset(name: string, preset: babel.PluginItem): void;

    /**
     * Registers multiple presets for use with Babel. `newPresets` should be an object where the key
     * is the name of the preset, and the value is the preset itself.
     */
    function registerPresets(presets: { [name: string]: babel.PluginItem }): void;

    const availablePlugins: { [name: string]: babel.PluginItem };
    const availablePresets: { [name: string]: babel.PluginItem };

    /**
     * Transform <script> tags with "text/babel" type.
     */
    function transformScriptTags(scriptTabs?: HTMLScriptElement[]): void;

    /**
     * Disables automatic transformation of <script> tags with "text/babel" type.
     */
    function disableScriptTags(): void;
}
