---
title: vela show
---

Show the reference doc for a component, trait, policy or workflow.

### Synopsis

Show the reference doc for component, trait, policy or workflow types. 'vela show' equals with 'vela def show'. 

```
vela show [flags]
```

### Examples

```
0. Run 'vela show' directly to start a web server for all reference docs.  
1. Generate documentation for ComponentDefinition webservice:
> vela show webservice -n vela-system
2. Generate documentation for local CUE Definition file webservice.cue:
> vela show webservice.cue
3. Generate documentation for local Cloud Resource Definition YAML alibaba-vpc.yaml:
> vela show alibaba-vpc.yaml
4. Specify output format, markdown supported:
> vela show webservice --format markdown
5. Specify a language for output, by default, it's english. You can also load your own translation script:
> vela show webservice --location zh
> vela show webservice --location zh --i18n https://kubevela.io/reference-i18n.json
6. Show doc for a specified revision, it must exist in control plane cluster:
> vela show webservice --revision v1
7. Generate docs for all capabilities into folder $HOME/.vela/reference/docs/
> vela show
8. Generate all docs and start a doc server
> vela show --web

```

### Options

```
  -e, --env string         specify environment name for application
      --format string      specify format of output data, by default it's a pretty human readable format, you can specify markdown(md)
  -h, --help               help for show
      --i18n string        specify the location for of the doc generated from definition, now supported options 'zh', 'en'.  (default "https://kubevela.io/reference-i18n.json")
  -l, --location string    specify the location for of the doc generated from definition, now supported options 'zh', 'en'. 
  -n, --namespace string   specify the Kubernetes namespace to use
  -p, --path string        Specify the path for of the doc generated from definition.
  -r, --revision string    Get the specified revision of a definition. Use def get to list revisions.
      --web                start web doc site
```

### Options inherited from parent commands

```
  -V, --verbosity Level   number for the log level verbosity
  -y, --yes               Assume yes for all user prompts
```

### SEE ALSO



#### Go Back to [CLI Commands](vela.md) Homepage.


###### Auto generated by [spf13/cobra script in KubeVela](https://github.com/kubevela/kubevela/tree/master/hack/docgen).