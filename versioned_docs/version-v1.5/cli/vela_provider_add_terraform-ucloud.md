---
title: vela provider add terraform-ucloud
---

Authenticate Terraform Cloud Provider terraform-ucloud

### Synopsis

Authenticate Terraform Cloud Provider terraform-ucloud by creating a credential secret and a Terraform Controller Provider

```
vela provider add terraform-ucloud [flags]
```

### Examples

```
vela provider add terraform-ucloud
```

### Options

```
      --UCLOUD_PRIVATE_KEY string   Get UCLOUD_PRIVATE_KEY per this guide https://docs.ucloud.cn/terraform/quickstart
      --UCLOUD_PROJECT_ID string    Get UCLOUD_PROJECT_ID per this guide https://docs.ucloud.cn/terraform/quickstart
      --UCLOUD_PUBLIC_KEY string    Get UCLOUD_PUBLIC_KEY per this guide https://docs.ucloud.cn/terraform/quickstart
      --UCLOUD_REGION string        Get UCLOUD_REGION by picking one RegionId from UCloud region list https://docs.ucloud.cn/api/summary/regionlist
  -h, --help                        help for terraform-ucloud
      --name default                The name of Terraform Provider for Ucloud Cloud, default is default (default "ucloud")
```

### Options inherited from parent commands

```
  -y, --yes   Assume yes for all user prompts
```

### SEE ALSO

* [vela provider add](vela_provider_add)	 - Authenticate Terraform Cloud Provider

#### Go Back to [CLI Commands](vela) Homepage.


###### Auto generated by spf13/cobra on 19-Apr-2022, refer to [script in KubeVela](https://github.com/kubevela/kubevela/tree/master/hack/docgen).